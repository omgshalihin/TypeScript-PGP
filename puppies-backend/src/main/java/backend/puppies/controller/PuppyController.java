package backend.puppies.controller;

import backend.puppies.model.Puppy;
import backend.puppies.service.PuppyService;
import org.bson.types.ObjectId;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/puppies")
public class PuppyController {

    private final PuppyService puppyService;

    public PuppyController(PuppyService puppyService) {
        this.puppyService = puppyService;
    }

    @GetMapping
    ResponseEntity<List<Puppy>> getPuppies() {
        return ResponseEntity.status(HttpStatus.OK).body(puppyService.getPuppies());
    }

    @PostMapping
    ResponseEntity<Puppy> addPuppy(@RequestBody Puppy puppyDetails) {
//        if (puppyService.getSpecificPuppy(puppyDetails.getId()) != null) {
//            return ResponseEntity.status(HttpStatus.CONFLICT).build();
//        }
        Puppy savedPuppy = puppyService.addPuppy(puppyDetails);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedPuppy);
    }

    @GetMapping("/{id}")
    ResponseEntity<Puppy> getSpecificPuppy(@PathVariable String id) {
        if (puppyService.getSpecificPuppy(id) == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(puppyService.getSpecificPuppy(id));
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void removePuppy(@PathVariable String id) {
        puppyService.removePuppy(id);
    }

    @PutMapping("/{id}")
    ResponseEntity<Puppy> replacePuppy(@PathVariable String id, @RequestBody Puppy newPuppyDetails) {
        if (puppyService.getSpecificPuppy(id) == null) {
            return ResponseEntity.notFound().build();
        }
        Puppy replacedPuppy = puppyService.replacePuppy(id, newPuppyDetails);
        return ResponseEntity.status(HttpStatus.OK).body(replacedPuppy);
    }
}
