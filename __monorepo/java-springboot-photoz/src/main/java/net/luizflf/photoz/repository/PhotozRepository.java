package net.luizflf.photoz.repository;

import net.luizflf.photoz.model.Photo;
import org.springframework.data.repository.CrudRepository;

public interface PhotozRepository extends CrudRepository<Photo, Integer> { }
