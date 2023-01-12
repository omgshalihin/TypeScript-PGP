package backend.puppies.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document("puppies")
@Data
@ToString
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Puppy {

    @MongoId(value = FieldType.OBJECT_ID)
    private String id;
    private String breed;
    private String name;
    private String dob;
    private String favorite;
}