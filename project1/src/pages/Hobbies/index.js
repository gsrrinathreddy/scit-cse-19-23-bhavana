
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://img.freepik.com/free-vector/silhouette-female-singer-performing-front-cheering-audience_1048-5556.jpg?w=826&t=st=1680067125~exp=1680067725~hmac=f4192fb1c938f73f41f410d78543d6b432768b55ddfcb5c3142d1c85838c2fff',
    title: 'Singing',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://thebogotapost.com/wp-content/uploads/2017/06/636052464065850579-137719760_flyer-image-1.jpg',
    title: 'Reading',
    
  },
  {
    img: 'https://scontent.fhyd15-1.fna.fbcdn.net/v/t1.6435-9/180693714_319424856210788_2924322063288650377_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3FAbv6as1kQAX8f5qNZ&_nc_ht=scontent.fhyd15-1.fna&oh=00_AfBP7VjGL99lHXTVgh9YRsFAmR7qxxDk94DZN5qr5EdmZA&oe=644E2AD1',
    title: 'Cooking',
    
  },
  {
    img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.veenaworld.com%2Fblog%2Fthe-benefits-of-travelling-why-travelling-is-good-for-you&psig=AOvVaw0kJnoJwpdJPPp268B59WbH&ust=1680342950606000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIiz4bbzhf4CFQAAAAAdAAAAABB4',
    title: 'Travelling',
    
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  
    cols: 2,
  },
];