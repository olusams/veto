import React from 'react';
const postData = [
  {
    title: 'The Future of Web Design: AI and Personalization',
    postHref: '/blog/blog-details',
    subtitle:
      'Discover how artificial intelligence is revolutionizing web design, creating dynamic, personalized experiences that were once the stuff of science fiction. We explore the tools and techniques that are shaping the future of the web.',
    authorName: 'Jane Doe, Lead Developer',
    authorImg: '/images/avatar_2.jpeg',
    authorDesignation: 'Leeds, UK',
    date: '18',
    month: 'May',
    year: '2024',
  },
  {
    title: 'The Power of a Strong Brand Identity in a Digital World',
    postHref: '/blog/blog-details',
    subtitle:
      'In a crowded digital landscape, a strong brand is more important than ever. We delve into the key elements of a memorable brand identity, from logo design to messaging, and how they can elevate your business.',
    authorName: 'John Smith, Creative Director',
    authorImg: '/images/avatar_3.jpeg',
    authorDesignation: 'Leeds, UK',
    date: '22',
    month: 'May',
    year: '2024',
  },
  {
    title: 'Boosting Your Business with Local SEO: A Complete Guide',
    postHref: '/blog/blog-details',
    subtitle:
      'For businesses serving a local community, mastering local SEO is essential. This guide covers everything you need to know, from Google Business Profile optimization to location-based keywords, to help you dominate the local search results.',
    authorName: 'Emily Jones, SEO Strategist',
    authorImg: '/images/avatar_4.jpeg',
    authorDesignation: 'Leeds, UK',
    date: '28',
    month: 'May',
    year: '2024',
  },
];

export default function PostList() {
  return (
    <ul className="cs-post_3_list cs-mp0">
      {postData.map((item, index) => (
        <li key={index}>
          <div className="cs-post cs-style3">
            <div className="cs-post_left">
              <div className="cs-posted_by">
                <span className="cs-primary_font">{item.date}</span>
                <span>
                  {item.month} <br />
                  {item.year}
                </span>
              </div>
            </div>
            <div className="cs-post_right">
              <h2 className="cs-post_title">
                <a href={item.postHref}>{item.title}</a>
              </h2>
              <div className="cs-post_subtitle">{item.subtitle}</div>
              <div className="cs-post_meta">
                <div className="cs-post_avatar">
                  <div className="cs-post_avatar_img">
                    <img src={item.authorImg} alt="Avatar" />
                  </div>
                  <div className="cs-post_avatar_info">
                    <h4>{item.authorName}</h4>
                    <p>{item.authorDesignation}</p>
                  </div>
                </div>
                <a href={item.postHref} className="cs-text_btn">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
