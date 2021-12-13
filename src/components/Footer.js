import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const Footer = () => {
  const { topItems } = useStaticQuery(
    graphql`
    query topLevelQueryForFooter {
      topItems: allWpMenuItem(
        filter: {menu: {node: {locations: {eq: GATSBY_FOOTER_MENU}}}, parentId: {eq: null}}
        ) {
        nodes {
          id
          label
          parentId
          childItems {
            nodes {
            label
            url
            path
            order
            target
            }
          }
          path
          url
          }
        }
      }
    `
  );
  return (
    <footer>
      <div className="container">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </div>
    </footer>
  );
};

export default Footer;
