import { CheckCircle } from "../../assets";
import {CommentCard} from "./CommentCard";

export const List = () => {
  return (
    <div className="w-full m-auto text-left">
      <h1 className="mb-6 text-3xl">List</h1>
      <p className="mb-6 text-lg text-gray-600">
        To use stacked list we need to add two classes to it. <br />
        1. <code className="code-line">list-none</code> : to remove the default
        list styling. <br />
        2. <code className="code-line">stacked-list</code> : to use a stacked
        list. <br />
        on the <code className="code-line">&lt;ul&gt;</code> tag.
      </p>
      {/* stacked list */}
      <ul className="list-none stacked-list mb-6">
        <li>
          <CommentCard/>
        </li>
        <li>
          <CommentCard/>
        </li>
        <li>
          <CommentCard/>
        </li>
        <li>
          <CommentCard/>
        </li>

        
      </ul>
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            {`<ul className="list-none stacked-list">
  <li> list item 1</li>
  <li> list item 2</li>
  <li> list item 3</li>
  <li> list item 4</li>
</ul>`}
          </code>
        </pre>
      </div>

      {/* spaced list */}
      <h1 className="mb-6 text-2xl">Spaced list</h1>
      <p className="mb-6 text-lg text-gray-600">
        To use spaced list we will take help of two utility classes. <br />
        1. <code className="code-line">list-none</code> : to remove the default
        list styling. <br />
        2. <code className="code-line">mb-4</code> : This class gives
        margin-bottom of 1rem. <br />
        We will add this class to the{" "}
        <code className="code-line">&lt;li&gt;</code> tag.
      </p>
      <ul className="list-none mb-6">
        <li className="mb-4">
          <div className="alert alert-quote alert-success ">
            <p className="flex items-center">
              <span className="mr-3">
                <CheckCircle />
              </span>
              This is a spaced list item 1 — check it out!
            </p>
          </div>
        </li>
        <li className="mb-4">
          <div className="alert alert-quote alert-success ">
            <p className="flex items-center">
              <span className="mr-3">
                <CheckCircle />
              </span>
              This is a spaced list item 2 — check it out!
            </p>
          </div>
        </li>
        <li className="mb-4">
          <div className="alert alert-quote alert-success ">
            <p className="flex items-center">
              <span className="mr-3">
                <CheckCircle />
              </span>
              This is a spaced list item 3 — check it out!
            </p>
          </div>
        </li>
        <li className="mb-10">
          <div className="alert alert-quote alert-success ">
            <p className="flex items-center">
              <span className="mr-3">
                <CheckCircle />
              </span>
              This is a spaced list item 4 — check it out!
            </p>
          </div>
        </li>
      </ul>
      {/* spaced list code */}
      <div className="content-container code-container">
        <pre className="text-lg">
          <code>
            {`<ul className="list-none">
  <li className = "mb-4"> list item 1</li>
  <li className = "mb-4"> list item 2</li>
  <li className = "mb-4"> list item 3</li>
  <li className = "mb-4"> list item 4</li>
</ul>`}
          </code>
        </pre>
      </div>
    </div>
  );
};
