# Fullstack Entertainment App

<div align="center"><img src="./images/presentation.gif" width=600 alt="gif of entertainment app being used"></div>

Project requirements and design provided thanks to [FrontEndMentors](https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X).

The requirement of the project is to create an entertainment app where a user can navigate through TV shows, movies, bookmarked, or all content. The project's initial requirement is to create a user interface with static data provided, but as an extra challenge, I created a full-stack application that aimed to achieve the following:

1. **Authentication**, user's are able to create an account and can only interact with the application if they are authenticated.
2. **Database modification**, user's are able to bookmark content, remove bookmarked content, and have those changes reflect on the user-interface and in the backend.
3. **Front/backend testing**, test the entire application to have confidence in client-side and server-side deployments.

A test user has been created so anybody can interact with the applicaiton without having to sign up
**Email: testuser@gmail.com**
**Password: Chopper!?990**


[Live Demo]()

## Techstack Used

This section contains information about the technology used for both the front-end and backend.[ESlint](https://eslint.org/) is used to lint the application, with one general ESLint file created which to apply rules which target both the front and backend.

### Frontend/Client

The frontend is bootstrapped with [Vite](https://vitejs.dev/guide/) using the React/Typescript template.

- [React](https://reactjs.org/docs/getting-started.html), front-end library for creating user interfaces
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress), testing library for creating intergration and unit test
- [Apollo Client](https://www.apollographql.com/docs/react/) state management tool for making queries/mutations to a GraphQL server and managing the state of those requests.
- [Formik](https://formik.org/), Front-end library for creating and managing forms in React
- [Styled Components](https://styled-components.com/) front-end library for writing CSS in React components
- [React Router](https://reactrouter.com/en/main) front-end library creating page navigation for a React application

Other packages installed include [yup](https://www.npmjs.com/package/yup) and [validator](https://www.npmjs.com/package/validator) to assist Formik with form validation for the login and sign up pages.

### Backend/Server

- [Apollo Server](https://www.apollographql.com/docs/apollo-server), GraphQL server for creating queries and mutations
- [MongoDB](https://www.mongodb.com/), database for storing user information and bookmarked content
- [Mongoose](https://mongoosejs.com/docs/), ODM for MongoDB
- [supertest](https://www.npmjs.com/package/supertest), testing library for testing the GraphQL server

Authentication was handled with [JSON Web tokens](https://www.npmjs.com/package/jsonwebtoken), with [bcrypt](https://www.npmjs.com/package/bcrypt) used to hash passwords.

I chose GraphQL as the server because it was easier to structure and grab data from a query or mutation. Since I was using TypeScript, the [graphql codegen tool](https://the-guild.dev/graphql/codegen) allowed me to insert all my GraphQL schema's into one file, run the codegen command, and generate the type information for queries and mutations. MongoDB was chosen because it is the database program that I am most familiar with, along with using Mongoose to create the schemas.

### Docker

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Docker Compose](https://docs.docker.com/compose/)

Before starting this project, I had just learned about Docker basics and its benefits to frontend/backend development. Two Docker Compose files were created that initalize a database in a virtual environment that can be accessed by the application. One for the developer environment, the other for the test environment(does not initialize data on build, and allows for the use of a reset query for the entire database). A [JavaScript file](./server/src/database/utils) intialzing the database was created which is used by docker to intialize the database in the virutal environment.

**For Windows Devices**, you must install [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) on your device, which allows developers to install a Linux distribution and use Linux applications, utitlies, and bash command-line tools diretly on Windows.

Please download [Docker Desktop](https://docs.docker.com/get-docker/), which must be running on your device when you wish to start a docker container. Once you have Docker Desktop installed, you will be able to run docker compose files without any other configuration. Please see the Docker section above for a link to the Docker Compose page.

#### Launching the Application Locally

This section will cover how to run the application locally on your meachine. Please follow the instructions below:

1. Clone the repository to your machine.
2. Run the command `npm install` to install all dependencies for the application. This command must be run in both the root, client, and server directories.
3. Create a `.env` file in the 



### Starting the Development Environment

Please follow the instructions below to run the development environment on your machine.

Note: **_Ensure Docker Desktop is running, containters will not start unless Docker Desktop is running._**

1. Run the command `npm run docker:mongo:dev`, this will create the docker container for MongoDB database to run.
2. Run the command `npm run start:server:dev`, this starts the server in developer mode. The server is listening on `localhost:4000/graphql`.
3. Run the command `npm run start:client:dev`, this starts the client in developer mode, using vite, any changes made to the client-side code will immediately reflect on the page (if no errors are found).

Any change/save made on the server will automatically cause a rebuild of the application.
When closing the application run the command `npm run docker:mongo:dev:down` to stop and delete the development container, or else the container will keep running and take up machine memory.

### Starting the Testing Environment

For both client-side and server-side, the backend must be running on the testing environment and the [docker test container](/docker-compose.test.yml) must be running as well. Please follow the instructions below:

1. Run the command `npm run docker:mongo:test`, this will create the docker container for MongoDB database to run.
2. Run the command `npm run start:server:test`, this starts the server in development mode. The server is listening on Port 4000.

#### Backend Testing

To start the backend test found in the the [testing folder](/server/src/__tests__/), run the command `test:backend`, and all test will run. Test are set up to run serially instead of parallely. Since each test is calling a query to reset the database, an issue was ocurring where a database reset from the previous test was also effecting the next test, causing the database to be reset twice and potentially insert extra data that was causing test to fail incorrectly. I just ensured that each test and test-suite ran one at a time.

The testing environment does not automatically seed the database with information, the seeding is only done while test are running. In the server, the query 'resetDatabase' can **only be run while in the testing environment**, any attempt to run this query outside of the testing enviornment will result in an error.

#### Client Testing

For client-side testing, we can either run all test in the command line or open cypress and have a more interactive testing environment.

- `npm run test:client:e2e:open` launches cypress, which allows you to see the various test files created and run them.
- `npm run test:client:e2e`, runs cypress in the command line, videos and screenshots will be generated into the cypress folder, but have been removed from tracking in `.gitignore`

## Development

This section will cover the development progress as I created the application, along with the issues I encountered and my solutions to them.

#### Frontend

I had experience building one-page applications before, but had never built an applicaiton needing to navigate to different routes. With the use of the _react-router_ library and its documentation, I was able to get a functioning routing system for the application. Since I was also using _apollo-client_, I dont believe I used the full capabilities of react-router, but in the future I want to return to the application and use react-router and apollo-client in a more efficient manner.

##### Searching For Content

How content is searched can depend on the page the user is on. On the Movies/Shows/Bookmark page, when a user searches for content the server is not being called, rather the cached data from the initial query hook is used.

```typescript
const Movies = () => {
  const { loading, data: content, error } = useGetAllMoviesQuery();
  const [search, setSearch] = useState('');

  const searchedContent = useMemo(() => {
    return content?.movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, content]);

  if (error) {
    return (
      <PageContainer>
        <PageError />
      </PageContainer>
    );
  }

  if (loading)
    return (
      <PageContainer>
        <LoadingSpinner />
      </PageContainer>
    );

  if (search !== '' && searchedContent) {
    return (
      <PageContainer data-cy="moviePage">
        <DashboardSearch
          search={search}
          setSearch={setSearch}
          placeholderText="Search for movies"
        />
        <SearchResults query={search} searchedData={searchedContent} />
      </PageContainer>
    );
  }


  ...
```

In the [Movie.tsx](./client/src/routes/Movies.tsx) component/page, a memoized value of searched content is created when the user changes the value of the search text, if there is search text, we pass that data to the [SearchResults.tsx](/client/src/components/SearchResults/SearchResults.tsx) component to display the filtered data.

The homepage handles searching differently, due to the query structure on the GraphQL server, there is a query hook that returns content based on the title text a user has passed in.

```typescript
const Homepage = () => {
  const [search, setSearch] = useState('');
  const {
    loading: homepageLoading,
    data: homepageContent,
    error: homepageError,
  } = useGetHomepageContentQuery();
  const [getSearch, { loading: searchLoading, data: searchedContent }] =
    useSearchAllContentLazyQuery({
      variables: {
        title: search,
      },
    });

  useEffect(() => {
    if (search === '') return;
    void searchAllContent();
  }, [search]);

  const searchAllContent = async (): Promise<void> => {
    await getSearch();
  };

  ...

  if (search !== '') {
    if (searchLoading) {
      <RouteContainer>
        <DashboardSearch
          search={search}
          setSearch={setSearch}
          placeholderText="Search for movies or TV series"
        />
        <p>Searching</p>
      </RouteContainer>;
    }

    const searchResult = searchedContent?.search ? searchedContent.search : [];
    return (
      <RouteContainer>
        <DashboardSearch
          search={search}
          setSearch={setSearch}
          placeholderText="Search for movies or TV series"
        />
        <SearchResults query={search} searchedData={searchResult} />
      </RouteContainer>
    );
  }
```

In the code block above, a "lazy" query is created which only fires if the returned function is called, in this case **getSearch**. If the state of "search" has a value, and the hook is no longer loading, then we display the results of that hook to the user. On the surface it works the same was as the other pages, but it is constantly making network request to the server on each keystroke, I plan to implement a "debounced" solution in the future to cut down on the amount of times a network call is made.

#### React Router

To allow seamless page navigation, verion six of the the _react-router_ library was implemented. If any error occurs users will receive an error page and be navigated back to the login page. _React.Suspense_ was implemented to lazy load pages that may not be selected. For example, the `Movies.tsx` will not be imported on initial page load, but when a user navigates to "movies", then they are shown a loading component until the page component is imported.

```typescript
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/welcome',
        element: <WelcomePage />,
      },
      {
        path: '/login',
        element: <LoginRoute />,
      },
      { path: '/sign-up', element: <SignUpRoute /> },
      {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          {
            children: [
              {
                index: true,
                element: <Homepage />,
              },
              {
                path: '/dashboard/movies',
                element: (
                  <Suspense fallback={<SuspenseFallback />}>
                    <Movies />
                  </Suspense>
                ),
              },
              {
                path: '/dashboard/shows',
                element: (
                  <Suspense fallback={<SuspenseFallback />}>
                    <TVShows />
                  </Suspense>
                ),
              },
              {
                path: '/dashboard/my-stuff',
                element: (
                  <Suspense fallback={<SuspenseFallback />}>
                    <Bookmarked />
                  </Suspense>
                ),
              },
            ],
          },
        ],
      },
    ],
  },
]);
```

##### Log in/Sign up

Users can navigate to the login page and sign up page, and once verified, the user is directed to the homepage. A JSON WebToken is created in saved in [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), which is inserted into every query to the backend for continous authentication.

When a user leaves the applicaiton and returns, if the token in the local storage is still valid, they are navigated direclty to the homepage, else the application navigates back to the login page. The **Dashboard** route calls a GraphQL query to verify the token. See the code block below:

```typescript
export const Dashboard = () => {
  const { error, loading } = useVerifyTokenQuery();
  const navigate = useNavigate();

  if (error) {
    localStorage.removeItem('ent-token');
    navigate('/login');
  }

  if (loading) return null;

  return (
    <>
      <Styled.Dashboard data-cy="dashboard">
        <NavBar />
        <div>
          <Outlet />
        </div>
      </Styled.Dashboard>
    </>
  );
};
```

_Formik_ is used to manage the form state, however, in the future I want to switch over to [react-hook-form](https://react-hook-form.com/) since I find building forms with that library works better than Formik.

#### GraphQL/Apollo Client

The _Apollo Client_ library is used to handle state management for GraphQL queries and mutations. Similar to the backend, the _codegen_ library is used to read a GraphQL schema file and generate the necesssary types and hooks based on the schema. In the code block below, a generated hook is used to retrieve all movie content from the server:

```typescript
const Movies = () => {
  const { loading, data: content, error } = useGetAllMoviesQuery();
  const [search, setSearch] = useState('');
  ...
```

The codeblock belows demonstrates a generatead mutation hook being used to bookmark content:

```typescript
const SmallContentCard = ({
  rating,
  title,
  type,
  year,
  bookmarked,
  id,
  images,
}: SmallContentProps) => {
  const { bookmarkContent } = useBookmarkMutation();
  const { unbookmarkContent } = useUnbookmarkMutation();

  ...

   const bookmark = () => {
    if (!bookmarked)
      void bookmarkContent({
        variables: { contentId: id, contentType: type },
      });
    else {
      void unbookmarkContent({
        variables: { contentId: id, contentType: type },
      });
    }
  };
```

### Backend

This was my first time creating my own backend service, however, thanks to [Fullstack TypeScript](https://frontendmasters.com/courses/fullstack-typescript/) course provided by [FrontEndMasters](https://frontendmasters.com/), I was able to find a good starting point to begin the process. I had knowledge of both TypeScript and GraphQL, but didnt't have the experience putting it all togther. This course really helped me start this project and help make it what it is today.

#### Server Configuration/Constants

```typescript
import { join } from 'path';
import { sync } from 'pkg-up';

export const SERVER_WORKSPACE_PKG_JSON_PATH = sync();
if (!SERVER_WORKSPACE_PKG_JSON_PATH)
  throw new Error('package.json path could not be found');
export const ROOT_PKG_JSON_PATH = join(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  SERVER_WORKSPACE_PKG_JSON_PATH,
  '..',
  '..'
);

const rootBasedPath = (name: string): string => {
  return join(ROOT_PKG_JSON_PATH, name);
};

export const CLIENT_ROOT_FOLDER_PATH = rootBasedPath('client');
// for serving images
export const STATIC_ROOT_FOLDER_PATH = rootBasedPath('static');
export const GRAPHQL_SCHEMA_PATH = rootBasedPath('schema.graphql');
export const PORT = process.env.PORT || 4000;

export const MONGO_URL =
  process.env.NODE_ENV == 'test'
    ? process.env.MONGO_URL_TEST
    : process.env.MONGO_URL;
```

For production and development purposes, a file containing various constant variables was created that can be accessed throught the application that provide the following information:

- Path for client code
- Path to static folder
- Path to the GraphQL Schema
- Port for the GraphQL server
- The MongoDB URL to use.

#### Creating the server

```typescript
export async function createApolloServer(
  httpServer: Server,
  app: express.Application
): Promise<ApolloServer<ExpressContext>> {
  const server = new ApolloServer({
    schema: addResolversToSchema({ schema: SCHEMA, resolvers }),
    context: ({ req }): EntertainmentResolverContext => ({
      currentUser: (() => {
        const auth = req ? req.headers.authorization : null;
        if (auth && auth.toLowerCase().startsWith('bearer')) {
          try {
            const decodedToken = jwt.verify(
              auth.substring(7),
              process.env.JWT_SECRET as string
            );
            if (typeof decodedToken === 'string') return null;
            else return decodedToken;
          } catch {
            return null;
          }
        } else return null;
      })(),
    }),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app });
  return server;
}
```

The GraphQL server is created along with express, and acts as as a middlware for the application. The GraphQL Schema file is located in the root directory and contains query and mutation information for the server. The path to the schema is provided to the apollo server thanks to the constant variable created in the `constants.ts` file, as seen above. A file named [`resolvers.ts`](./server/src/apollo/resolvers.ts) contains an object with the resolver information which is imported into this file and injected into the apollo server arguments using the `addResolversToSchema` method.

The apollo server creates a context which extracts a possible JWT token, decodes the token, and returns the decoded data as `currentUser` in every resolver. It checks for a authorization header, and if there is a valid head, it attempts to decode a token, else it skips this step. If it doesnt find a token then `currentUser` is null the GraphQL query or mutation will throw an error as seen below:

```typescript
 movies: async (_, __, { currentUser }) => {
    if (!currentUser) throw new AuthenticationError('invalid token');
    const user = await userService.getUser(currentUser.id);
    ...
```

The only plugin provided is the [`ApolloServerPluginDrainHttpServer`](https://www.apollographql.com/docs/apollo-server/api/plugin/drain-http-server/) plugin, which ensures the server shuts down gracefully. At the end of the function, we start the server, apply the express app as a middleware, and return the server. The Apollo server is attached to the Express server.

#### Intializing the Server

```typescript
export const app = express();

async function main() {
  app.use('/static', express.static(STATIC_ROOT_FOLDER_PATH));
  const httpServer = createServer(app);
  const apolloServer = await createApolloServer(httpServer, app);
  const mongoURL = MONGO_URL as string;
  const nodeENV = process.env.NODE_ENV as string;

  mongoose
    .connect(mongoURL)
    .then(async () => {
      console.log('connected to mongo db');
      if (nodeENV !== 'test') {
        await seedDB();
        console.log('database seeded');
      }
    })
    .catch((e) => {
      console.log('error connecting to MongoDB');
      console.log(e);
    });

  await new Promise<void>((resolve) => {
    app.listen(PORT, () => {
      console.log(
        `GraphQL API Listening on http://localhost:${PORT}${apolloServer.graphqlPath}`
      );
      resolve();
    });
  });
}

main().catch((err) => console.log(err));
```

The `main` function intializes the server by executing the following:

1. create a path to the static folder whcih will contain images used by the application.
2. Use the `createApolloServer` function with an HTTP server passsed in along with the express application created above the main function.
3. Grab the Mongo URL and Node environment from the `constants.ts` file.
4. Connect to the MongoDB database, if it fails we log an error, else we check to see if we are in the test environment. If in the test environment the database is not seeded, else the database is seeded.
5. Have the app listen to the PORT provied by `constants.ts` file.

If you are on a local machine, you can now go to `localhost:4000/graphql` to view the GraphQL playground and make queries/mutations to the server.

#### MongoDB

```typescript
import mongoose from 'mongoose';
import { DbUser } from '../db';

const userSchema = new mongoose.Schema<DbUser>({
  email: {
    type: String,
    unique: true,
    required: true,
    minlength: 8,
  },
  name: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  bookmarkedShows: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Show',
    },
  ],
  bookmarkedMovies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie',
    },
  ],
});

export default mongoose.model<DbUser>('User', userSchema);
```

A MongoDB database is used in this application, with a piece of content being defined as a movie or show, each having its own schema. The example above displays the mongoose schema for a user, it contains a relationship between users and shows/movies which keeps track of which movies/shows a user has bookmarked.

The movie and show schemas contain the title, rating, links to images, etc. Typescript along with mongoose is used to properly type the schemas. A typescript file named [`db.ts`](./server/src/database/db.ts) contains the schema types which are applied to the schemas and other parts of the application.

Models were created to interact with the database instead of having the queries/mutations interact with the database directly.

```typescript
const getAllMovies = async (): Promise<DbMovie[]> => {
  return await Movie.find({});
};

const getMovieById = async (id: string): Promise<DbMovie | null> => {
  const targetMovie = await Movie.findById(id);
  if (targetMovie !== null) return targetMovie;
  else return null;
};

const insertMovie = async (movie: NewMovie): Promise<DbMovie> => {
  const newMovie = new Movie({
    title: movie.title,
    images: movie.images,
    year: movie.year,
    rating: movie.rating,
  });
  const saveResult = await newMovie.save();
  return saveResult;
};

const deleteMovieById = async (id: string): Promise<void> => {
  const targetMovie = await Movie.findById(id);
  if (targetMovie !== null) await targetMovie.delete();
  else throw new Error('Movie not found');
};

export default {
  getAllMovies,
  getMovieById,
  insertMovie,
  deleteMovieById,
};
```

In the code block above the `getAllMovies` function uses the schema method `find` to grab all movies from the database. The `insertMovie` function creates a new movie object using the `NewMovie` type, and saves it to the database. The `deleteMovieById` function grabs a movie by its id, and deletes it from the database.

#### GraphQL Resolvers

Multiple queries and mutations were created to interact with the graphQL server.

##### Query

```typescript
const queryResolver: QueryResolvers<EntertainmentResolverContext> = {
  movies: async (_, __, { currentUser }) => {
    if (!currentUser) throw new AuthenticationError('invalid token');
    const user = await userService.getUser(currentUser.id);
    const bookmarkedMovies = user.bookmarkedMovies.map((id) =>
      id._id.toString()
    );
    const allMovies = await movieService.getAllMovies();
    return allMovies.map((movie) => {
      const bookmarked = bookmarkedMovies.includes(movie.id);
      if (bookmarked) return movieTransform(movie, true);
      else return movieTransform(movie, false);
    });
  },

  ...
```

In the code block above displays a `movies` resolver which checks to see if a valid user (logged in) is making this query, if not then the resolver throws back an error that is by the client. If a user is logged then the following occurs:

1. Get the user information,
2. Grab the id's of all movies the user has bookmarked.
3. Grab all movie data, and for each movie check to see if that movie is bookmarked by the user by using `includes` Array method on the bookmarked movie array. Depending on this result, either a movie marked as "bookmarked" or not will be returned.
4. A transform function is used to turn the `DBMovie` type into the proper type defined by the GraphQL schema. This just means removing MongoDB specific properties and methods.

##### Mutation

```typescript
async bookmarkContent(_, args, { currentUser }) {
    if (!currentUser) throw new AuthenticationError('invalid token');
    const user = await userService.getUser(currentUser.id);
    if (args.contentType === 'show') {
      const show = await userService.addFavoriteShow(args.contentId, user);
      return showTransform(show, true);
    } else if (args.contentType === 'movie') {
      const movie = await userService.addFavoriteMovie(args.contentId, user);
      return movieTransform(movie, true);
    } else {
      throw new UserInputError('bad content type provided');
    }
  },

  ...
```

The code block above displays the code of the mutation `bookmarkContent` which marks a movie/show as bookmarked under the target user in the schema. If an unauthenticated user is attempting to fire this mutation then an error is thrown, else the mutation executes the following:

1. If the target content is marked as a content type _show_, then:
   - Call the user service which inserts the show into the user's bookmarked show property
   - This function will throw an error if a show that is already bookmarked is being inserted again.
2. If the content being bookmarked is a movie, then the steps for bookmarking a show are repeated, but for the bookmarked movie property under the target user.

### Testing

This part was one of the most challenging sections of this project since I had never tested a backend before. I wanted to test the backend while it was running to ensure that all queries/mutations were called propertly with the correct arguments.

#### Frontend Testing

```typescript
describe('user login', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.request({
      method: 'POST',
      url: 'http://localhost:4000/graphql',
      body: {
        operationName: 'Mutation',
        query: 'mutation Mutation {resetDb}',
      },
    });
    cy.get('[data-cy="loginForm"]').as('loginForm');
    cy.get('[data-cy="loginEmail"]').as('loginEmail');
    cy.get('[data-cy="loginPassword"]').as('loginPassword');
    cy.get('[data-cy="loginButton"]').as('loginButton');
    cy.get('[data-cy="signUpLink"]').as('signUpLink');
  });

  it('valid login, redirected to home page', () => {
    cy.get('@loginEmail').type('testuser@gmail.com');
    cy.get('@loginPassword').type('Chopper!?990');
    cy.get('@loginButton').click();

    cy.get('@loginForm').should('not.exist');
    cy.url().should('include', '/dashboard');
    cy.get('[data-cy="dashboard"]');
  });

  ...

});
```

Above is a test for the login page, the test visits the login page, grabs all the elements needed to interact with the login form. Cypress then types in the email and password, clicks the login button, and verifies that the login form no longer exists, and that the user is redirected to the dashboard page.

Using the `beforeEach hook`, each test will make a query to the server to reset the database, this _resetDB_ query will only execute if the server is in testing mode.

#### Backend Testing

According to the [Apollo Server documentation](https://www.apollographql.com/docs/apollo-server/testing/testing/), it is possible to test the resolvers without sending an HTTP request, but I wanted to test resolvers and the HTTP request together.

This led me to use the _supertest_ package to make direct request to the apollo server with custom GraphQL queries and mutations.

```typescript
const baseURL = request('http://localhost:4000/graphql');

beforeEach(async () => {
  await baseURL.post('').send({
    operationName: 'Mutation',
    query: 'mutation Mutation {resetDb}',
  });
});

describe('User login', () => {
  test('valid user login sent, token returned', async () => {
    await baseURL
      .post('')
      .send({
        operationName: 'Mutation',
        query:
          'mutation Mutation($email: String!, $password: String!) {  loginUser(email: $email, password: $password) {token}}',
        variables: {
          password: 'Chopper!?990',
          email: 'jorgemendoza2002@gmail.com',
        },
      })
      .expect('Content-Type', /application\/json/)
      .expect(200);
  });
```

Above is a test that verifies a user login and confirms that a token is retrieved. With supertest, we can set a base URL to send a request to and must create a GraphQL query or mutation to pass in. This was a very tedious task since there was no syntax help when writing the GraphQL query in this format. Though with this method, I was able to test all main functionalities of the application with no client interaction required.

The main goal was to write test that could be run seperate from the client.

## Development Wrap-up

There is alot more to say about the developemnt process of this application, regarding the testing issues, refactoring multiple queries into one, etc. One thing I want to research more is the context of GraphQL, in the FrontEndMasters course the instructor placed some Database methods into the context itself, I didnt do that here since I didn't fully understand why it was being done, but if it is a technique that will improve the application then it will be implemented in the future.

As I learn more about accessiblity, I wish to improve that aspect of the application as well.

If you have any questions about the development process up to this point please feel free to email me at `jorgemendozaiidev@gmail.com`.
