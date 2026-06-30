# ---------- Build ----------
FROM maven:3.9-eclipse-temurin-21 AS builder

WORKDIR /app

COPY pom.xml .
COPY src ./src

RUN mvn clean package -DskipTests


# ---------- Runtime ----------
FROM eclipse-temurin:21-jre

# 1. User + Group anlegen
RUN groupadd -r appgroup && useradd -r -g appgroup -u 1001 appuser

WORKDIR /app

# 2. Rechte setzen
COPY --from=builder /app/target/*.jar app.jar
RUN chown -R appuser:appgroup /app

# 3. Sicherheitsuser setzen
USER appuser

EXPOSE 8080

ENTRYPOINT ["java","-jar","app.jar"]