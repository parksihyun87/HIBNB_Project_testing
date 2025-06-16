package com.example.hibnb_project.config;

import com.example.hibnb_project.component.CustomAuthenticationEntryPoint;
import com.example.hibnb_project.component.CustomerAccessDeniedHandler;
import com.example.hibnb_project.data.repository.UserRepository;
import com.example.hibnb_project.jwt.JwtFilter;
import com.example.hibnb_project.jwt.JwtLoginFilter;
import com.example.hibnb_project.jwt.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

import java.util.List;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
    private final JwtUtil jwtUtil;
    private final AuthenticationConfiguration authenticationConfiguration;
    private final UserRepository userRepository;
    private final CustomAuthenticationEntryPoint customAuthenticationEntryPoint;
    private final CustomerAccessDeniedHandler customerAccessDeniedHandler;

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
                .formLogin(form -> form.disable())
                .httpBasic(httpBasic -> httpBasic.disable())
                .authorizeHttpRequests(authorize -> {
                    authorize.requestMatchers("/**").permitAll();
                    authorize.requestMatchers("/", "/login", "/join", "/board/postlist", "/reissue", "/re-confirm-id-email", "/re-confirm-id", "/re-confirm-pw", "/accom/list", "/accom/list/detailedlist", "/accom/post", "/accom/test", "/api/kakao/**").permitAll();
                    authorize.requestMatchers("/admin/**").hasRole("ADMIN");
                    authorize.anyRequest().authenticated();
                })
                .cors(cors -> cors.configurationSource(request -> {
                    CorsConfiguration corsConfiguration = new CorsConfiguration();
                    corsConfiguration.addAllowedOrigin("http://localhost:3000");
                    corsConfiguration.addAllowedHeader("*");
                    corsConfiguration.setExposedHeaders(List.of("Authorization"));// 헤더를 읽을 수 있도록 허용
                    corsConfiguration.addAllowedMethod("*");
                    corsConfiguration.setAllowCredentials(true); // 헤더를 읽을 수 있도록 허용
                    return corsConfiguration;
                }))
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .addFilterBefore(new JwtFilter(this.jwtUtil), JwtLoginFilter.class)
                .addFilterAt(new JwtLoginFilter(this.jwtUtil, this.authenticationManager(this.authenticationConfiguration), this.userRepository), UsernamePasswordAuthenticationFilter.class); //addfilter > 마지막에 ,
//                .exceptionHandling(exception -> {
//                    exception.authenticationEntryPoint(this.customAuthenticationEntryPoint);
//                    exception.accessDeniedHandler(this.customerAccessDeniedHandler);
//                });
        return http.build();
    }
}

