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

    public PostDto createPost(String imageId, String content) {
        Post newPost = Post.builder()
                .user("baris")
                .imageId(imageId)
                .content(content)
                .build();

        Post savedPost = postRepository.save(newPost);
        return postMapper.postToPostDto(savedPost);
    }
}
