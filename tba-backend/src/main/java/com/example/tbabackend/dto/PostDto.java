package com.example.tbabackend.dto;

import lombok.Data;

import java.util.Date;

@Data
public class PostDto {

    private String user;
    private String content;
    private String imageId;
    private Date dateCreated;
    private Date lastUpdated;
}
