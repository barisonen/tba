package com.example.tbabackend.controllerparam;

import lombok.Data;

@Data
public class CreatePostRequest {
    private String imageUrl;
    private String content;
}
