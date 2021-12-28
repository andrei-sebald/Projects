# ArcGis Classifier
## This is a project I created to solve a problem we were facing in the UCSD Design Lab: 
  
  We had tracking data on people that we recieved with gps watches. But we could not tell if the person was walking, driving or biking. 
  Because I had a machine learning background, I gathered training data of walking biking and driving and used that data to generate a machine learning model. I then needed to determine which features to measure that could be used to classify the transportaion type. 
  Speed was a start, but then a slowing down car would be classified as a bike or a walker. I then decided to calculate the variance between the speed in each gps frame and the previous 2, 5 and 10 frames.
  These would each be one feature of each data point. 
  
  After all was said and done the model had an accuracy of about 90 percent and was a huge help on the project. We could then use arc gis to visualize the data, using different
  icons for each classification. The model was continued to be in use even after I left the design team. 
