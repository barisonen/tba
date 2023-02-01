package com.example.tbabackend.controller;

import com.example.tbabackend.dto.PostDto;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
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

        PostDto p2 = new PostDto();
        p2.setUser("baris 2");
        p2.setHeader("hi");
        p2.setContent("other content");
        p2.setDate(new Date());
        posts.add(p2);

        PostDto p3 = new PostDto();
        p3.setUser("baris 3");
        p3.setHeader("hiiiii");
        p3.setContent("another content");
        p3.setDate(new Date());
        posts.add(p3);

        PostDto p4 = new PostDto();
        p4.setUser("baris 3");
        p4.setHeader("hiiiii");
        p4.setContent("thiswillbealongtextthatislongerthan30characters");
        p4.setDate(new Date());
        posts.add(p4);


        return posts;
    }
}
