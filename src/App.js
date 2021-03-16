import './App.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Grid container className='intro-container' spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h3' className='title' gutterBottom>
              MyFlix Project Case Study
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='h4' gutterBottom>
              Overview <br />
            </Typography>
            <Typography variant='body1' gutterBottom>
              MyFlix is a web app that provides users with a database of information about a wide variety of movies. 
              Users are able to create a profile, update their personal data and save their favorite movies. <br />
            </Typography>
            <Typography variant='h4' gutterBottom>
              Purpose and Context <br />
            </Typography>
            <Typography variant='body1' gutterBottom>
              This project was a personal project and a part of my curriculum at Career Foundry 
              to demonstrate my understanding of MERN stack JavaScript development. <br />
            </Typography>
            <Typography variant='h4' gutterBottom>
              Objective <br />
            </Typography>
            <Typography variant='body1' gutterBottom>
              The objective was to challenge myself and create an app that would cover all aspects of the MERN stack. 
              I created the entire app from scratch including the server-side API and all of its implemented logic.<br />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
              <img src={process.env.PUBLIC_URL + '/main.png'} alt='main'></img>
          </Grid>
        </Grid>

        <Grid container className='server-container' spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h4' gutterBottom>
              The Process
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <img src={process.env.PUBLIC_URL + '/postman.png'} alt='postman'></img>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='h5' gutterBottom>
              Server-side
            </Typography>
            <Typography variant='body1' gutterBottom>
              The first step that I had to take was to build the API for the server-side in JavaScript. 
              I created a RESTful API using Node.js, Express, and Mongoose, which interact with a database in MongoDB. 
              The API is accessed through Common HTTP requests such as: GET, POST, PUT, and DELETE. 
              The HTTP responses are then returned in JSON format. In order to create the API and test its functionality, I used an application called Postman. 
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant='h5' gutterBottom>
              Client-side
            </Typography>
            <Typography variant='body1' gutterBottom>
              The second half of the project was to build out the client-side of the application to interact with the server-side API. 
              Since this was my first time ever building an application using the react framework, 
              it took me a little bit longer than I expected because I had to learn the basic format and syntax as I went. <br /><br />
              The thing that I struggled with the most and this portion of building this project was understanding State and props. 
              It took me a while to understand how as a developer, you can change the state of a component, and therefore change its internal data. 
              I also struggled to understand the concept of props initially, 
              but once I had a chance to dive deeper into the code I understood that props is just a way of passing data in between components 
              and have them communicate with each other. <br /><br />
              The other tool that took me a while to understand was React-Redux, which is a strategy that centralizes stateful logic. 
              It is a very powerful concept, but in practice it is difficult to learn. 
              This was the hardest thing for me to grasp since I really only had a basic understanding of even JavaScript at this point. <br /><br />
              Overall this project took me a little less than a month to complete since it was the first time I had ever used any of these Concepts and Technologies.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={process.env.PUBLIC_URL + '/movies.png'} alt='movies'></img>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h4' gutterBottom>
              The Conclusion
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            The most important thing I learned from this project was how powerful react can be, if used properly, 
            and how important good documentation is, especially when building your own API with each of its endpoints.  
            There are a few things that I think I will change with the project in the future such as the layout, some transitions, 
            and I would like to add more features as well. It was a fun project to work on and I'm proud of how it turned out.
          </Grid>
        </Grid>

        <Grid container className='demo-text' spacing={3}>
          <Grid item xs={12}>
            To use the Demo below use the following login information: <br /><br />
            Username: DemoUser<br />
            Password: Password
          </Grid>
        </Grid>

        <div className='buttons'>
          <div className='button'>
            <Button variant='contained' color='primary' href='https://myflix-app.netlify.app' target='blank'>
              Demo
            </Button>
          </div>
          
          <div className='button'>
            <Button variant='contained' color='primary' href='https://github.com/Trevor2492/myFlix-client' target='blank'>
              Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
