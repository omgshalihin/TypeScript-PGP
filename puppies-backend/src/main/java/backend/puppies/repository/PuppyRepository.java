package backend.puppies.repository;

import backend.puppies.model.Puppy;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PuppyRepository extends MongoRepository<Puppy, ObjectId> {
    Puppy findPuppyById(String id);

    void deletePuppyById(String id);
}
