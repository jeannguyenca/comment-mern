const secrets = {
    // dbUri: process.env.DB_URI
    dbUri: "mongodb://heroku_fvk6s9j4:heroku_fvk6s9j4@ds037498.mlab.com:37498/heroku_fvk6s9j4"
};

//heroku
//mongodb://heroku_fvk6s9j4:heroku_fvk6s9j4@ds037498.mlab.com:37498/heroku_fvk6s9j4
// mongo ds119273.mlab.com:19273/comment-mern -u jeannguyen -p huonggiang252326
//
// export DB_URI=mongodb://jeannguyen:huonggiang252326@ds119273.mlab.com:19273/comment-mern

export const getSecret = key => secrets[key];
