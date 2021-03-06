//import node_module
import React from 'react';

//import components
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper/ListWrapper';
import PostList from 'components/list/PostList/PostList';

const ListPage = () => {
  return (
    <PageTemplate>
      <ListWrapper>
        <PostList />
      </ListWrapper>
    </PageTemplate>
  );
};

export default ListPage;
