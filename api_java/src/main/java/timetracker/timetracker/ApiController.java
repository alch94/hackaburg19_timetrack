package timetracker.timetracker;

import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.util.List;

@RestController
public class ApiController {

	private final ActivityRepository repository;

	ApiController(ActivityRepository repository) {
		this.repository = repository;
	}

	@RequestMapping("/hello")
	public String hello() {
		return "hello";
	}

	@CrossOrigin(origins = "http://localhost:8080")
	@GetMapping("/activities")
    List<Activity> all() {
		return repository.findAll();
	}

	@PostMapping("/activity")
	Activity newActivity(@RequestBody Activity activity) {

		activity.setDuration(calculateDuration(activity));
		Activity newActivity = repository.save(activity);

		return newActivity;
	}

	@PutMapping("/updateactivity/{id}")
	Activity updateActivity(@PathVariable long id, @RequestBody Activity activity) {

		activity.setDuration(calculateDuration(activity));
		return repository.save(activity);
	}

	@DeleteMapping("/deleteactivity/{id}")
	public void deleteActivity(@PathVariable long id) {
		repository.deleteById(id);
	}

	@GetMapping("/count")
	public long cound() {
		return repository.count();
	}

	@GetMapping("/deleteall")
	public String deleteActivity() {
		repository.deleteAll();
		return "done";
	}

	@GetMapping("/healthz")
	public String healthz() {
		return "ok";
	}

	private Long calculateDuration(Activity activity) {

		Long duration = null;

		if (activity.getStarttime() != null && activity.getEndtime() != null) {
			Duration dur = Duration.between(activity.getStarttime(), activity.getEndtime());
			duration = dur.getSeconds();
		}

		return duration;
	}
}
