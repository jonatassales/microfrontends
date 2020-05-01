import React, { ReactElement } from 'react'
import { useQuery } from 'react-apollo-hooks'
import gql from 'graphql-tag'
import { Post } from './types'

const GET_POSTS = gql(`
  query posts($search: String) {
    posts(search: $search) {
      total
      items {
        id
        title
        body
        comments {
          message
          timestamp
        }
      }
    }
  }
`)

interface PlaylistsProps {
  search: string;
}

export default function Posts(props: PlaylistsProps): ReactElement {
  const { search } = props;
  const { data } = useQuery(
    GET_POSTS,
    {suspend: true, variables: { search } }
  )
  const { items } = data.posts;

  return (
    <div>
      {items.map((post: Post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <div>
            {
              post.comments.map(comment => {
                const date = new Date(comment.timestamp)
                return (
                  <div key={comment.id}>
                    <p>{comment.message} ({date.getDate()})</p>
                  </div>
                )
              })
            }
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
