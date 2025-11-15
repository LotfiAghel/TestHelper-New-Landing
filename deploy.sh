#!/bin/bash

REMOTE_USER="bineshniaroot"
REMOTE_HOST="213.108.241.149"
REMOTE_FOLDER="untitled-ui/"  
BRANCH_NAME="dockerize"


if [[ -n "$SSH_KEY_PATH" && ! -f "$SSH_KEY_PATH" ]]; then
    echo "Error: SSH private key not found at $SSH_KEY_PATH."
    echo "Please ensure the path is correct or remove SSH_KEY_PATH if using default key."
    exit 1
fi

SSH_COMMAND="ssh -o StrictHostKeyChecking=no $REMOTE_USER@$REMOTE_HOST" # -o StrictHostKeyChecking=no can be used for automation, but be cautious in production

SSH_COMMAND+=

echo "Attempting to connect to $REMOTE_HOST as $REMOTE_USER..."

${SSH_COMMAND} << EOF
    set -e # Exit immediately if a command exits with a non-zero status

    echo "Connected to remote server. Current directory: \$(pwd)"
    echo "Changing directory to: $REMOTE_FOLDER"
    cd "$REMOTE_FOLDER" || { echo "Error: Could not change directory to $REMOTE_FOLDER. Exiting."; exit 1; }
    echo "Pulling latest changes from branch '$BRANCH_NAME'..."
    git pull origin "$BRANCH_NAME" || { echo "Error: Git pull failed. Exiting."; exit 1; }
    echo "Git pull completed successfully."

    echo "Running 'docker compose up --build --force-recreate -d'..."
    # --build: Rebuild images if necessary
    # --force-recreate: Recreate containers even if their configuration hasn't changed
    # -d: Run containers in detached mode (in the background)
    docker compose up --build --force-recreate -d || { echo "Error: Docker Compose failed. Exiting."; exit 1; }
    echo "Docker Compose services are up and running in detached mode."

    echo "Remote commands finished successfully."
EOF

# Check the exit status of the SSH command itself
if [ $? -eq 0 ]; then
    echo "-------------------------------------"
    echo "🎉 Deployment successful!"
else
    echo "-------------------------------------"
    echo "❌ Deployment failed. Please check the error messages above."
    exit 1
fi
