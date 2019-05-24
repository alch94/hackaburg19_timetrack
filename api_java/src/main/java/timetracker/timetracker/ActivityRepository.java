package timetracker.timetracker;

import org.springframework.data.jpa.repository.JpaRepository;


public interface ActivityRepository extends JpaRepository<Activity, Long> {

}
