package com.example.tbabackend.mapper;

import com.example.tbabackend.dto.PostDto;
import com.example.tbabackend.entity.Post;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface PostMapper {
    Post postDtoToPost(PostDto postDto);
    PostDto postToPostDto(Post post);
    List<PostDto> postListToPostDtoList(List<Post> postList);
    List<Post> postDtoListToPostList(List<PostDto> postDtoList);
}
