package backend.puppies.service;

import backend.puppies.model.Puppy;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Optional;

public interface PuppyService {

    List<Puppy> getPuppies();


    Puppy getSpecificPuppy(String id);

    Puppy addPuppy(Puppy puppyDetails);

    void removePuppy(String id);

    Puppy replacePuppy(String id, Puppy newPuppyDetails);
}
