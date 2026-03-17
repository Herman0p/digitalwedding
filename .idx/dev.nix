{ pkgs, ... }: {
  # Nix channel to use.
  channel = "stable-24.11"; # Or "unstable"

  # Packages to make available in the environment.
  packages = [
    pkgs.nodejs_22
  ];

  # Environment variables to set.
  env = {};

  # VS Code extensions to install.
  idx.extensions = [
    "dbaeumer.vscode-eslint"
    "esbenp.prettier-vscode"
    "bradlc.vscode-tailwindcss"
  ];

  # Workspace lifecycle hooks.
  idx.workspace = {
    # Runs when a workspace is first created.
    onCreate = {
      npm-install = "npm install";
    };
    # Runs every time the workspace is (re)started.
    onStart = {
      dev-server = "npm run dev";
    };
  };

  # Web preview configuration.
  idx.previews = {
    enable = true;
    previews = {
      web = {
        command = ["npm" "run" "dev" "--" "--port" "$PORT"];
        manager = "web";
      };
    };
  };
}
