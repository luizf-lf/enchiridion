package net.luizflf.photoz.web;

import net.luizflf.photoz.model.Photo;
import net.luizflf.photoz.service.PhotozService;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
public class DownloadController {

    private final PhotozService photozService;

    public DownloadController(PhotozService photozService) {
        this.photozService = photozService;
    }

    @GetMapping("/api/images/downloadImage/{id}")
    public ResponseEntity<byte[]> download(@PathVariable String id) {
        Photo photo = photozService.get(id);
        if (photo == null) throw new ResponseStatusException(HttpStatus.NOT_FOUND);

        byte[] data = photo.getData();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.valueOf(photo.getContentType()));
        headers.setContentDisposition(ContentDisposition.builder("attachment").filename(photo.getFileName()).build());

        return new ResponseEntity<>(data, headers, HttpStatus.OK);
    }

}
