import React from 'react'
import Div from '../Div'
import AuthorWidget from '../Widget/AuthorWidget'
import RecentPost from '../Widget/RecentPost'
import SearchWidget from '../Widget/SearchWidget'
import SideMenuWidget from '../Widget/SideMenuWidget'
import TagWidget from '../Widget/TagWidget'

export default function Sidebar() {
  const tagData = [
    {
      title: 'Web Development',
      url:'/'
    },
    {
      title: 'Digital Strategy',
      url:'/'
    },
    {
      title: 'UI/UX Design',
      url:'/'
    },
    {
      title: 'eCommerce',
      url:'/'
    },
    {
      title: 'Business Growth',
      url:'/'
    },
    {
      title: 'Technology',
      url:'/'
    },
    {
      title: 'Digital Marketing',
      url:'/'
    },
  ]
  const archiveData = [
    {
      title: 'March 2024',
      url:'/'
    },
    {
      title: 'February 2024',
      url:'/'
    },
    {
      title: 'January 2024',
      url:'/'
    },
    {
      title: 'December 2023',
      url:'/'
    }
  ]
  const categoryData = [
    {
      title: 'Web Development',
      url:'/'
    },
    {
      title: 'Digital Strategy',
      url:'/'
    },
    {
      title: 'UI/UX Design',
      url:'/'
    },
    {
      title: 'eCommerce',
      url:'/'
    },
    {
      title: 'Business Growth',
      url:'/'
    }
  ]
  const recentPostData = [
    {
      title: 'Digital Transformation: The Key to Business Growth in 2024',
      thumb: '/images/post_4.jpeg',
      href: '/blog/blog-details',
      date: 'March 7, 2024'
    },
    {
      title: 'Bespoke Web Development: Creating Custom Solutions for Your Business',
      thumb: '/images/post_5.jpeg',
      href: '/blog/blog-details',
      date: 'March 5, 2024'
    },
    {
      title: 'The Impact of AI on Modern Business Operations',
      thumb: '/images/post_6.jpeg',
      href: '/blog/blog-details',
      date: 'March 4, 2024'
    },
    {
      title: 'Optimizing Your Digital Strategy for Maximum ROI',
      thumb: '/images/recent_post_4.jpeg',
      href: '/blog/blog-details',
      date: 'March 3, 2024'
    },
  ]
  return (
    <>
      <Div className="cs-sidebar_item">
        <AuthorWidget 
          src='/images/avatar_1.png'
          name='Remlyx Digital'
          description='Based in Leeds, we are a leading digital agency specializing in bespoke web development, UI/UX design, and digital strategy. Our team combines technical expertise with creative innovation to deliver powerful digital solutions that drive business growth and create lasting value for our clients.'
        />
      </Div>
      <Div className="cs-sidebar_item">
        <SearchWidget title='Search Digital Insights'/>
      </Div>
      <Div className="cs-sidebar_item">
        <SideMenuWidget title='Categories' data={categoryData}/>
      </Div>
      <Div className="cs-sidebar_item">
        <RecentPost title='Latest Articles' data={recentPostData}/>
      </Div>
      <Div className="cs-sidebar_item">
        <SideMenuWidget title='Archives' data={archiveData}/>
      </Div>
      <Div className="cs-sidebar_item">
        <TagWidget title='Popular Topics' data={tagData}/>
      </Div>
    </>
  )
}
