import { user } from "@/utility/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
  const userData = user.filter((item) => item.id == content.params.id);
  return NextResponse.json(
    userData.length !== 0 ? userData[0] : "No data Found",
    {
      status: 200,
    }
  );
}
export async function PUT(request, content) {
  let payload = await request.json();
  payload.id = content.params.id;
  console.log(payload);
  if (!payload.id || !payload.name || !payload.age || !payload.email) {
    return NextResponse.json({ result: "Data is not found" }, { status: 400 });
  }
  return NextResponse.json({ result: payload }, { status: 201 });
}
export function DELETE(request, content) {
  let id = content.params.id;
  if (id) {
    return NextResponse.json(
      { result: "user deletes", success: true },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { result: "not valid data", success: false },
      { status: 400 }
    );
  }
}
