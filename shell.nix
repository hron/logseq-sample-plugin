{ pkgs ? import <nixpkgs> { config = { allowUnfree = true; }; } }:

with pkgs; mkShell {
  name = "logseq-sample-plugin";

  buildInputs = [
    nodejs_18
    yarn
  ];
}
