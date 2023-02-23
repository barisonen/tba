package com.example.tbabackend.controller;

import com.example.tbabackend.controllerparam.CreatePostRequest;
import com.example.tbabackend.dto.PostDto;
import com.example.tbabackend.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/posts")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @GetMapping("/get-posts")
    public ResponseEntity<List<PostDto>> getPosts() {
        List<PostDto> postList = postService.getPosts();
        return ResponseEntity.ok(postList);
    }

    @PostMapping("/create-post")
    public ResponseEntity<PostDto> createPost(@RequestBody CreatePostRequest request) {
        PostDto savedPost = postService.createPost(request.getImageUrl(), request.getContent());
        return ResponseEntity.ok(savedPost);
    }
}
