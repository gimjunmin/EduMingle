# 기본 이미지로 Node.js의 LTS 버전을 선택합니다.
FROM node:lts

# 애플리케이션 디렉토리 생성
WORKDIR /usr/src/app

# 애플리케이션 의존성 파일 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 애플리케이션 소스 복사
COPY . .

# Next.js 애플리케이션 빌드
RUN npm run build

# 애플리케이션 시작
CMD ["npm", "start"]