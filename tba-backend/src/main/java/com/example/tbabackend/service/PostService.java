package com.example.tbabackend.service;

import com.example.tbabackend.dto.PostDto;
import com.example.tbabackend.entity.Post;
import com.example.tbabackend.mapper.PostMapper;
import com.example.tbabackend.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostMapper postMapper = Mappers.getMapper(PostMapper.class);

    private final PostRepository postRepository;

    public List<PostDto> getPosts() {
        List<Post> posts = postRepository.findAll();
        return postMapper.postListToPostDtoList(posts);
    }

    public PostDto createPost(PostDto postDto) {
        Post post = postMapper.postDtoToPost(postDto);
        Post savedPost = postRepository.save(post);
        return postMapper.postToPostDto(savedPost);
    }
}
