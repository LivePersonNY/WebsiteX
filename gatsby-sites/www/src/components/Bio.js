import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Bio = ({ id, date, readingTime }) => {
  const { users: {authors} } = useStaticQuery(graphql`
    query BioQuery {
      # if there was more than one user, this would need to be filtered
      users: allWpUser {
        authors: edges {
          info: node {
            firstName
            lastName
            id
            seo {
              social {
                linkedIn
              }
            }
            description
            avatar {
              url
            }
          }
        }
      }
    }
  `);
    
  let authorBox = authors.map(function({info}) {

    if (info.id == id) {
      const author = info;
      const avatarUrl = author?.avatar?.url;
      
        return (
          <div className="bio">
            <div class="row">
              <div class="col-lg-8">
                <div class="bio-img">
                  <a href={author.seo.social.linkedIn}>
                    <img src={avatarUrl} className="rounded-circle" />
                  </a>
                </div>
                <div class="bio-body">
                  <p class="h5">{author.firstName} {author.lastName}</p>
                  <p class="h6 date">{date} &bull; {readingTime} minutes</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  });

  return (
    <>
      {authorBox}
    </>
  );
  
};

export default Bio;
