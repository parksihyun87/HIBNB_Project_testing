-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: hibnb
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accom`
--

DROP TABLE IF EXISTS `accom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accom` (
  `accomid` int NOT NULL AUTO_INCREMENT,
  `hostid` varchar(100) NOT NULL,
  `hostname` varchar(10) NOT NULL,
  `address` varchar(255) NOT NULL,
  `detailaddr` varchar(255) NOT NULL,
  `description` tinytext NOT NULL,
  `type` varchar(10) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `max_capacity` int NOT NULL,
  `price_per_night` int NOT NULL,
  `bedrooms` int DEFAULT NULL,
  `beds` int DEFAULT NULL,
  `bathrooms` int DEFAULT NULL,
  `average` double DEFAULT NULL,
  PRIMARY KEY (`accomid`),
  KEY `hostid` (`hostid`),
  CONSTRAINT `accom_ibfk_1` FOREIGN KEY (`hostid`) REFERENCES `users` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accom`
--

LOCK TABLES `accom` WRITE;
/*!40000 ALTER TABLE `accom` DISABLE KEYS */;
INSERT INTO `accom` VALUES (1,'yoonji98','윤지영','서울특별시 마포구 합정동','101동 1502호','신축|고층|한강뷰|편의점근처','오피스텔','https://example.com/img1.jpg',4,85000,1,2,1,4.75),(2,'seojun05','서준호','부산광역시 해운대구 중동','3층 전체','오션뷰|무료주차|바다근처','펜션','https://example.com/img2.jpg',6,120000,2,3,2,NULL),(3,'harin33','이하린','경기도 성남시 분당구 정자동','502호','신축|조용한동네|엘리베이터','아파트','https://example.com/img3.jpg',3,70000,1,1,1,NULL),(4,'minseo21','김민서','서울특별시 강남구 논현동','논현타워 1101호','역세권|야경좋음|무료WiFi','오피스텔','https://example.com/img4.jpg',2,95000,1,1,1,NULL),(5,'daehyun17','정대현','대구광역시 수성구 범어동','101동 501호','조용함|무료주차|중심가','빌라','https://example.com/img5.jpg',5,80000,2,2,2,3.9),(6,'sujin88','백수진','인천광역시 연수구 송도동','송도더샵 B동 1803호','신축|시티뷰|안전한단지','아파트','https://example.com/img6.jpg',4,95000,2,2,1,4),(7,'taemin76','이태민','광주광역시 동구 지산동','103호','1층|주차편리|조용한주택가','원룸','https://example.com/img7.jpg',2,60000,1,1,1,4.6),(8,'hyesoo12','최혜수','부산광역시 수영구 광안동','605호','광안리뷰|넓은침대|오션뷰','게스트하우스','https://example.com/img8.jpg',3,75000,1,2,1,5),(9,'jungwoo31','정우빈','서울특별시 종로구 청운동','주택 2층 전체','한옥|고즈넉함|북촌근처','게스트하우스','https://example.com/img9.jpg',4,100000,2,2,1,NULL),(10,'arin22','박아린','경기도 고양시 일산서구 주엽동','101동 1902호','신축|호수공원근처|깨끗함','아파트','https://example.com/img10.jpg',4,90000,2,2,1,NULL),(11,'soyeon92','한소연','경상남도 창원시 성산구 상남동','2층 전체','넓은거실|주방 완비|주차 가능','빌라','https://example.com/img11.jpg',6,85000,3,3,2,3.5),(12,'jinhwan64','송진환','강원도 강릉시 송정동','단독주택 전체','바닷가 근처|조용함|강릉역근처','펜션','https://example.com/img12.jpg',5,110000,2,3,2,4.7),(13,'daun09','이다운','서울특별시 동대문구 회기동','104동 502호','역세권|야경뷰|안락한공간','오피스텔','https://example.com/img13.jpg',3,78000,1,1,1,NULL),(14,'nayeon56','정나연','제주특별자치도 제주시 애월읍','101호','제주감성|바다근처|무료주차','리조트','https://example.com/img14.jpg',4,130000,2,2,1,NULL),(15,'hyunjin81','김현진','서울특별시 영등포구 문래동','문래하이빌 1601호','힙지로|고층|야경맛집','오피스텔','https://example.com/img15.jpg',2,87000,1,1,1,NULL),(16,'yebin45','이예빈','충청북도 청주시 흥덕구 복대동','3층 302호','신축|깔끔함|근처상권좋음','빌라','https://example.com/img16.jpg',3,72000,2,2,1,NULL),(17,'sungwoo29','남성우','전라북도 전주시 덕진구 인후동','단독주택','한옥|조용한동네|단독이용','게스트하우스','https://example.com/img17.jpg',5,78000,2,2,1,4.2),(18,'eunji36','서은지','경기도 수원시 영통구 이의동','101동 1003호','신축|학군좋음|조용함','아파트','https://example.com/img18.jpg',4,88000,2,2,1,3.8),(19,'jiyun72','오지윤','대전광역시 유성구 봉명동','202호','온천지근|조용함|주차가능','원룸','https://example.com/img19.jpg',2,65000,1,1,1,NULL),(20,'haeun27','장하은','경기도 남양주시 다산동','203동 1804호','강가근처|뷰좋음|신축','아파트','https://example.com/img20.jpg',3,91000,2,2,1,NULL);
/*!40000 ALTER TABLE `accom` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `bookid` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `accomid` int NOT NULL,
  `checkindate` date NOT NULL,
  `checkoutdate` date NOT NULL,
  `total_price` int DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `yesorno` tinyint(1) DEFAULT NULL,
  `payment` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`bookid`),
  KEY `username` (`username`),
  KEY `accomid` (`accomid`),
  CONSTRAINT `book_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`),
  CONSTRAINT `book_ibfk_2` FOREIGN KEY (`accomid`) REFERENCES `accom` (`accomid`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (1,'admin1',1,'2025-06-01','2025-06-03',150000,'이용완료',0,'1'),(2,'arin22',1,'2025-06-10','2025-06-13',225000,'예약',0,'1'),(3,'daehyun17',2,'2025-07-01','2025-07-04',360000,'예약',0,'1'),(4,'daun09',3,'2025-07-10','2025-07-12',180000,'예약',0,'1'),(5,'eunji36',4,'2025-08-01','2025-08-03',220000,'예약',0,'1'),(6,'haeun27',5,'2025-06-15','2025-06-17',200000,'예약',0,'0'),(7,'harin33',6,'2025-06-10','2025-06-12',210000,'이용완료',0,'1'),(8,'hyesoo12',7,'2025-06-20','2025-06-22',190000,'예약',0,'1'),(9,'hyunjin81',8,'2025-06-05','2025-06-07',170000,'이용완료',0,'1'),(10,'jiyun72',9,'2025-07-15','2025-07-18',285000,'예약',0,'1'),(11,'jungwoo31',10,'2025-08-05','2025-08-07',260000,'예약',0,'0'),(12,'minseo21',11,'2025-06-08','2025-06-10',160000,'이용완료',0,'1'),(13,'nayeon56',12,'2025-06-12','2025-06-14',200000,'이용완료',0,'1'),(14,'park_jh',13,'2025-06-18','2025-06-21',330000,'예약',0,'1'),(15,'seojun05',14,'2025-07-05','2025-07-07',195000,'예약',0,'1'),(16,'seonah',15,'2025-07-25','2025-07-28',270000,'예약',0,'1'),(17,'soyeon92',16,'2025-06-20','2025-06-22',210000,'예약',0,'0'),(18,'sujin88',17,'2025-06-03','2025-06-05',190000,'이용완료',0,'1'),(19,'sungwoo29',18,'2025-06-10','2025-06-12',215000,'이용완료',0,'1'),(20,'yoonji98',19,'2025-08-10','2025-08-12',230000,'예약',0,'1'),(21,'yebin45',20,'2025-06-15','2025-06-18',270000,'예약',0,'1'),(22,'soyeon92',5,'2025-06-22','2025-06-24',180000,'예약',0,'1'),(23,'jungwoo31',12,'2025-07-01','2025-07-04',300000,'예약',0,'1'),(24,'minseo21',7,'2025-06-25','2025-06-27',190000,'이용완료',0,'1'),(25,'arin22',3,'2025-07-05','2025-07-07',195000,'예약',0,'1'),(26,'haeun27',8,'2025-06-28','2025-06-30',210000,'예약',0,'1'),(27,'jangmi',1,'2025-06-18','2025-06-20',150000,'이용완료',0,'1'),(28,'honggil',6,'2025-07-10','2025-07-12',210000,'예약',0,'1'),(29,'daun09',4,'2025-06-15','2025-06-17',200000,'예약',0,'0'),(30,'eunji36',9,'2025-07-20','2025-07-22',190000,'예약',0,'1');
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `img`
--

DROP TABLE IF EXISTS `img`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `img` (
  `accomid` int NOT NULL,
  `img1` varchar(255) NOT NULL,
  `img2` varchar(255) DEFAULT NULL,
  `img3` varchar(255) DEFAULT NULL,
  `img4` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`accomid`),
  CONSTRAINT `accomid` FOREIGN KEY (`accomid`) REFERENCES `accom` (`accomid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `img`
--

LOCK TABLES `img` WRITE;
/*!40000 ALTER TABLE `img` DISABLE KEYS */;
INSERT INTO `img` VALUES (1,'http://localhost:8080/src/main/resources/static/upload/accom/1.webp',NULL,NULL,NULL),(2,'http://localhost:8080/src/main/resources/static/upload/accom/2.webp',NULL,NULL,NULL),(3,'http://localhost:8080/src/main/resources/static/upload/accom/3.webp',NULL,NULL,NULL),(4,'http://localhost:8080/src/main/resources/static/upload/accom/4.webp',NULL,NULL,NULL),(5,'http://localhost:8080/src/main/resources/static/upload/accom/5.webp',NULL,NULL,NULL),(6,'http://localhost:8080/src/main/resources/static/upload/accom/6.webp',NULL,NULL,NULL),(7,'http://localhost:8080/src/main/resources/static/upload/accom/7.webp',NULL,NULL,NULL),(8,'http://localhost:8080/src/main/resources/static/upload/accom/8.webp',NULL,NULL,NULL),(9,'http://localhost:8080/src/main/resources/static/upload/accom/9.webp',NULL,NULL,NULL),(10,'http://localhost:8080/src/main/resources/static/upload/accom/10.webp',NULL,NULL,NULL);
/*!40000 ALTER TABLE `img` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `report`
--

DROP TABLE IF EXISTS `report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `report` (
  `reportid` int NOT NULL AUTO_INCREMENT,
  `accomid` int NOT NULL,
  `bookid` int NOT NULL,
  `username` varchar(100) NOT NULL,
  `comment` tinytext,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`reportid`),
  KEY `username` (`username`),
  KEY `accomid` (`accomid`),
  KEY `bookid` (`bookid`),
  CONSTRAINT `report_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`),
  CONSTRAINT `report_ibfk_2` FOREIGN KEY (`accomid`) REFERENCES `accom` (`accomid`),
  CONSTRAINT `report_ibfk_3` FOREIGN KEY (`bookid`) REFERENCES `book` (`bookid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `report`
--

LOCK TABLES `report` WRITE;
/*!40000 ALTER TABLE `report` DISABLE KEYS */;
/*!40000 ALTER TABLE `report` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `reviewid` int NOT NULL AUTO_INCREMENT,
  `accomid` int NOT NULL,
  `bookid` int NOT NULL,
  `username` varchar(100) NOT NULL,
  `rating` double NOT NULL,
  `comment` tinytext,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`reviewid`),
  KEY `username` (`username`),
  KEY `accomid` (`accomid`),
  KEY `bookid` (`bookid`),
  CONSTRAINT `review_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`),
  CONSTRAINT `review_ibfk_2` FOREIGN KEY (`accomid`) REFERENCES `accom` (`accomid`),
  CONSTRAINT `review_ibfk_3` FOREIGN KEY (`bookid`) REFERENCES `book` (`bookid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,1,1,'admin1',4.5,'깨끗하고 위치도 좋아요.','2025-06-04 15:20:00'),(2,6,7,'harin33',4,'조용하고 편안했어요.','2025-06-13 12:00:00'),(3,8,9,'hyunjin81',5,'정말 만족스러운 숙소입니다!','2025-06-08 20:30:00'),(4,11,12,'minseo21',3.5,'가성비 좋아요.','2025-06-11 18:15:00'),(5,12,13,'nayeon56',4.7,'친절한 호스트, 다시 방문하고 싶어요.','2025-06-16 09:45:00'),(6,17,18,'sujin88',4.2,'깨끗하고 시설이 잘 되어있네요.','2025-06-06 13:20:00'),(7,18,19,'sungwoo29',3.8,'위치가 조금 애매했지만 숙소는 좋았어요.','2025-06-12 21:00:00'),(8,1,26,'jangmi',5,'최고였어요! 강력 추천합니다.','2025-06-21 11:10:00'),(9,7,28,'minseo21',4.6,'다음에도 또 머무르고 싶네요.','2025-06-28 10:00:00'),(10,5,29,'daun09',3.9,'가성비 괜찮았어요.','2025-06-18 16:35:00');
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(10) NOT NULL,
  `name` varchar(10) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `age` int NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('admin1','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_ADMIN','관리자','01000000000','admin@example.com',30),('arin22','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','박아린','01066778899','arin22@example.com',23),('choiho','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','최호준','01045674567','choiho@example.com',29),('daehyun17','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','정대현','01077778888','daehyun17@example.com',26),('daun09','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','이다운','01030303333','daun09@example.com',22),('eunji36','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','서은지','01080808888','eunji36@example.com',21),('haeun27','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','장하은','01012121212','haeun27@example.com',22),('harin33','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','이하린','01011113333','harin33@example.com',22),('honggil','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','홍길동','01089818981','honggil@example.com',35),('hyesoo12','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','최혜수','01099887766','hyesoo12@example.com',24),('hyunjin81','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','김현진','01050505555','hyunjin81@example.com',23),('jangmi','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','장미영','01011221122','jangmi77@example.com',26),('jinhwan64','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','송진환','01020202222','jinhwan64@example.com',29),('jiyun72','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','오지윤','01090909999','jiyun72@example.com',24),('jungwoo31','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','정우빈','01033445566','jungwoo31@example.com',28),('kimseok','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','김석진','01090929092','seokjin.kim@example.com',32),('leechan','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','이찬우','01078907890','chanwoo.lee@example.com',28),('minji12','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','김민지','01023451234','minji12@example.com',27),('minseo21','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','김민서','01044445555','minseo21@example.com',24),('nayeon56','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','정나연','01040404444','nayeon56@example.com',25),('park_jh','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','박지현','01034563456','jhpark@example.com',22),('seojun05','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','서준호','01087654321','seojun05@example.com',25),('seonah','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','최선아','01011112222','dondo0412@gmail.com',24),('soyeon92','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','한소연','01010101111','soyeon92@example.com',26),('sujin03','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','이수진','01067896789','sujin03@example.com',21),('sujin88','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','백수진','01011223344','sujin88@example.com',21),('sungwoo29','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','남성우','01070707777','sungwoo29@example.com',30),('taemin76','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','이태민','01022334455','taemin76@example.com',27),('yebin45','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','이예빈','01060606666','yebin45@example.com',20),('yoonji98','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','윤지영','01012345678','yoonji98@example.com',23),('yuna_k','$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe$2a$10$BHlIBdbDgPxLHvrjX.ULvO59w7w2gsw5yyrUIn6U3yNluBE2eXaMe','ROLE_USER','강유나','01056785678','yuna.kang@example.com',25);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `verificationcode`
--

DROP TABLE IF EXISTS `verificationcode`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `verificationcode` (
  `codeid` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `code` varchar(6) DEFAULT NULL,
  `createdat` datetime DEFAULT NULL,
  `expiresat` datetime DEFAULT NULL,
  `isverified` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`codeid`),
  KEY `username` (`username`),
  CONSTRAINT `verificationcode_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `verificationcode`
--

LOCK TABLES `verificationcode` WRITE;
/*!40000 ALTER TABLE `verificationcode` DISABLE KEYS */;
/*!40000 ALTER TABLE `verificationcode` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-13 16:45:00
