
export default function PageOne() {
  return (
    <>
      <title>Centered Card</title>
      <style>
        {`
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }

          .card {
            width: 300px;
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
      <div class="card">
        <h2>Card Title</h2>
      </div>
    </>
  );
}
