import React, { useEffect, useState } from "react";
import TopicsCard from "./TopicsCard";
import Loading from "./Loading";
import { getTopics } from "../api";

function TopicsList() {
  const [topics, setTopics] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTopics()
      .then(({ data }) => {
        if (data.topics.length === 0) {
          setError("No topics found.");
        } else {
          setTopics(data.topics);
        }
      })
      .catch((error) => {
        console.error("Error fetching topics:", error);
        setError("Failed to fetch topics. Please try again.");
      });
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (topics === null) {
    return <Loading />;
  }

  return (
    <>
      {topics.map((topic) => (
        <TopicsCard
          key={topic.slug}
          topicSlug={topic.slug}
          topicDescription={topic.description}
        />
      ))}
    </>
  );
}

export default TopicsList;
