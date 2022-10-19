import { of } from "rxjs/internal/observable/of";
import { Post } from "src/app/models/post";
import { PostService } from "src/app/services/post/post.service";
import { PostsComponent } from "./posts.component";


describe('PostsComponent', () => {

  let postsComponent: PostsComponent;
  let posts: Post[];

  //let fakeValue = true;
  // const serviceSpy= jasmine.createSpyObj('MyService', ['method'], {'property': fakeValue});
  let mockPostService: any

  beforeEach(() => {
    posts = [
        {id: '1', title: 'title1', body: 'body1'},
        {id: '2', title: 'title2', body: 'body2'}
    ]

    mockPostService = jasmine.createSpyObj('PostService', ['getPosts', 'delete'])
    postsComponent = new PostsComponent(mockPostService)

  });


  describe('get', () => {
    it('Should add post into posts', () => {
        mockPostService.getPosts.and.returnValue(of(posts))
        postsComponent.getPosts()
        expect(postsComponent.posts.length).toBeGreaterThan(0);
        expect(postsComponent.posts.length).toBe(2);
        expect(mockPostService.getPosts).toHaveBeenCalled;
      });
  });

  describe('del', () => {
    it('Should delete post with id 1', () => {
        mockPostService.delete.and.returnValue(of())

        postsComponent.posts = posts
        const sizeBeforeDEl = postsComponent.posts.length
    
        postsComponent.delete(posts[0])
        const sizeAfterDEl = postsComponent.posts.length
    
        expect(postsComponent.posts.length).toBe(1);
        expect(sizeAfterDEl).toBeLessThan(sizeBeforeDEl);
        expect(mockPostService.delete).toHaveBeenCalledTimes(1);
      });
  });

});