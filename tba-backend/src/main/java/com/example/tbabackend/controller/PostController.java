package com.example.tbabackend.controller;

import com.example.tbabackend.dto.PostDto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {

    @GetMapping("/getPosts")
    public List<PostDto> getPosts() {
        List<PostDto> posts = new ArrayList<>();
        PostDto p1 = new PostDto();
        p1.setUser("baris");
        p1.setHeader("hello");
        p1.setContent("content 1");
        p1.setDate(new Date());
        posts.add(p1);

        return posts;
    }
}
