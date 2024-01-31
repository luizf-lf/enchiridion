package net.luizflf.photoz.web;

import net.luizflf.photoz.model.Photo;
import net.luizflf.photoz.service.PhotozService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
public class PhotozController {

    private final PhotozService photozService;

    public PhotozController(PhotozService photozService) {
        this.photozService = photozService;
    }

    @GetMapping("/")
    public Map<String, String> hello() {
        Map<String, String> responseMap = new HashMap<>();
        responseMap.put("response", "pong");

        return responseMap;
    }

    @GetMapping("/api/images")
    public Iterable<Photo> get() {
        return photozService.get();
    }

    @GetMapping("/api/images/{id}")
    public Photo get(@PathVariable Integer id) {
        Photo photo = photozService.get(id);

        if (photo == null) throw new ResponseStatusException(HttpStatus.NOT_FOUND);

        return photo;
    }

    @DeleteMapping("/api/images/{id}")
    public void delete(@PathVariable Integer id) {
        photozService.remove(id);
    }

    @PostMapping("/api/images/upload")
    public Photo create(@RequestPart("file") MultipartFile file) throws IOException {
        return photozService.save(file.getOriginalFilename(), file.getContentType(), file.getBytes());
    }
}
