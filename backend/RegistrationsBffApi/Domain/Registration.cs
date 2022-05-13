using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace RegistrationsBffApi.Domain;

public class Registration
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public ObjectId Id { get; set; }

    [BsonElement("name")]
    public string Name { get; set; } = string.Empty;
    [BsonElement("dateOfCourse")]
    public DateTime DateOfCourse { get; set; }
    [BsonElement("course")]
    public string Course { get; set; } = string.Empty;
    [BsonElement("status")]
    public string Status { get; set; } = string.Empty;  

}
