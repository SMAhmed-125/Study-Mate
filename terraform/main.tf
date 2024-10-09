provider "aws" {
  region = "us-east-2"
}

resource "aws_instance" "example" {
  ami           = "ami-008687c5b5546727c" # Choose the AMI based on your setup
  instance_type = "t2.micro"
}
