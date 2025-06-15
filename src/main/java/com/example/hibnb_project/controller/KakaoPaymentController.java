package com.example.hibnb_project.controller;

import com.example.hibnb_project.kakao.ApproveRequest;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

// KakaoPaymentController.java
@RestController
@RequestMapping("/api/kakao")
public class KakaoPaymentController {

    private final RestTemplate restTemplate = new RestTemplate();

    @PostMapping("/approve")
    public ResponseEntity<String> approvePayment(@RequestBody ApproveRequest request) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        headers.set("Authorization", "KakaoAK 81abfcdd0ae8ff4b65676cb6a27bcdba");

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("cid", "TC0ONETIME"); // 테스트용 CID
        params.add("tid", request.getTid());
        params.add("partner_order_id", "order1234");
        params.add("partner_user_id", "user1234");
        params.add("pg_token", request.getPg_token());

        HttpEntity<MultiValueMap<String, String>> entity = new HttpEntity<>(params, headers);

        try {
            ResponseEntity<String> response = restTemplate.postForEntity(
                    "https://kapi.kakao.com/v1/payment/approve",
                    entity,
                    String.class
            );
            return ResponseEntity.ok(response.getBody());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("결제 승인 실패: " + e.getMessage());
        }
    }
}
