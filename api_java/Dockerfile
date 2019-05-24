FROM ubuntu:18.04
RUN apt-get update
RUN apt-get install default-jdk -y
RUN apt-get install maven -y
RUN apt-get install git -y
RUN mkdir source
RUN mkdir jar
WORKDIR source
RUN git clone https://github.com/alch94/hackaburg19_timetrack.git code
WORKDIR /source/code/api_java/
RUN mvn clean package
RUN ls -la target
ENTRYPOINT ["java", "-jar", "target/timetracker-0.0.1-SNAPSHOT.jar"]