import React, { Component } from 'react'
import Link from './Links'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class LinkList extends Component {
    render() {
        // 1
        if (this.props.feedQuery && this.props.feedQuery.loading) {
            return <div> Loading </div>
        }

        // 2
        if (this.props.feedQuery && this.props.feedQuery.error) {
            return <div> Error </div>
        }

        // 3
        const linksToRender = this.props.feedQuery.feed.links

        return ( 
            <div> 
                { linksToRender.map(link => ( 
                    <Link key = { link.id } link = { link }/>
                ))} 
            </div>
        )

        //
        const POST_MUTATION = gql `
            # 2
            mutation PostMutation($description: String!, $url: String!) {
                post(
                    description: $description,
                    url: $url,
                ) 
                
                {
                    id
                    createdAt
                    url
                    description
                }
            }
        `
    }
}

export default graphql(POST_MUTATION, { name: 'postMutation' })(CreateLink)