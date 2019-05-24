package timetracker.timetracker;

import javax.persistence.*;

import lombok.Data;
import org.apache.tomcat.jni.Local;

import java.time.LocalDateTime;

@Data
@Entity
class Activity {

  private @Id @GeneratedValue Long id;
  private String userid;
  private String deviceid;
  private LocalDateTime starttime;
  private LocalDateTime endtime;
  private String ostype;
  private String exename;
  @Column(length = 1000)
  private String windowtitle;
  private Long duration; // milliseconds



}
