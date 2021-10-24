Main functionalities:-
    1) Employee Management
    2) Trainee Management
    3) Job Management

url and api:-
    1)/ or /employees --> http://localhost:8080/api/v1/employees
    2)/add-employee/:id --> http://localhost:8080/api/v1/employees/id
    3)/view-employee/:id --> http://localhost:8080/api/v1/employees/id
    4)/trainees --> http://localhost:8080/api/v1/trainees
    5)/add-trainee/:id --> http://localhost:8080/api/v1/trainees/id
    6)/view-trainee/:id --> http://localhost:8080/api/v1/trainees/id
    7)/jobs --> http://localhost:8080/api/v1/jobs
    8)/add-job/:id --> http://localhost:8080/api/v1/jobs/id
    9)/view-job/:id --> http://localhost:8080/api/v1/jobs/id

Configuration:-
    1) Frontend --> npm i before run the frontend
    2) Backend --> Make sure the configuration changes should be done in application.properties file
                    1) need to create a database called "hrm", you can also create in different name also
                       but if you create a database with different name then config url should be
                        "spring.datasource.url=jdbc:mysql://localhost:3306/hrm?useSSL=false"
                            to
                         "spring.datasource.url=jdbc:mysql://localhost:3306/{your db name}?useSSL=false"
                    2) I your local mysql version is mysql8 then you can remove the following line
                        spring.datasource.driver-class-name=com.mysql.jdbc.Driver
                    3) Replace the db username and password with your one.
                    4) additional changes in pom.xml file
                        a) If your java version is 8 then you sould change the following line
                            <java.version>11</java.version>
                                to
                             <java.version>1.8</java.version>
                        b) If you use mysql 8+ then change the following line
                                    <dependency>
                            			<groupId>mysql</groupId>
                            			<artifactId>mysql-connector-java</artifactId>
                            			<version>5.1.47</version>
                            		</dependency>
                            		    to
                            		<dependency>
                                        <groupId>mysql</groupId>
                                        <artifactId>mysql-connector-java</artifactId>
                                        <scope>runtime</scope>
                                    </dependency>

