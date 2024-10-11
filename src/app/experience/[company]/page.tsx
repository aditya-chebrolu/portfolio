import React from "react";
import PageWrapper from "@/components/custom/page-wrapper";
import Title from "@/components/custom/title";
const data = {
  company: "Bajaj Finserv Health"
};

const ExperiencePage = () => {
  return (
    <PageWrapper>
      <Title>
        <span className="text-muted-foreground">Experience @ </span>
        <span className="dark:text-yellow-400">{data.company}</span>
      </Title>
      <div>
        <h2>tech i have extensive experience with</h2>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas suscipit assumenda possimus incidunt debitis eum,
          ducimus explicabo! Soluta, dolor temporibus? Repudiandae fugit suscipit reiciendis eum, similique vero cum quidem
          soluta.
        </div>
      </div>
      <div>
        <h2>tech i have been exposed to</h2>
      </div>
      <div>
        <h2>At {data.company}, I have...</h2>
      </div>
    </PageWrapper>
  );
};

export default ExperiencePage;
