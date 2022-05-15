const Breed = (breed) => {
  return {
    name: breed.name.toLowerCase(),
    image: breed.image?.url,
    minWeight: breed.weight.metric.split('-')[0].trim(),
    maxWeight: breed.weight.metric.split('-')[1]?.trim(),
    temperaments: breed.temperament?.split(',')?.map(temperament => temperament.toLowerCase().trim())
  }
}

module.exports = Breed
