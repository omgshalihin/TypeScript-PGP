package backend.puppies.service;

import backend.puppies.model.Puppy;
import backend.puppies.repository.PuppyRepository;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PuppyServiceImplementation implements PuppyService {

    private final PuppyRepository puppyRepository;

    public PuppyServiceImplementation(PuppyRepository puppyRepository) {
        this.puppyRepository = puppyRepository;
    }

    @Override
    public List<Puppy> getPuppies() {
        return puppyRepository.findAll();
    }



    @Override
    public Puppy getSpecificPuppy(String id) {
        return puppyRepository.findPuppyById(id);
    }

    @Override
    public Puppy addPuppy(Puppy puppyDetails) {
        return puppyRepository.save(puppyDetails);
    }


}
