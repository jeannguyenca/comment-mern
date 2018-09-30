const secrets = {
    dbUri: process.env.DB_URI
};
// mongo ds119273.mlab.com:19273/comment-mern -u jeannguyen -p huonggiang252326
//
// export DB_URI=mongodb://jeannguyen:huonggiang252326@ds119273.mlab.com:19273/comment-mern

export const getSecret = key => secrets[key];
