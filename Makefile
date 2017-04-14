.PHONY: main
main:
	@cat slack.js | pbcopy

.PHONY: panel
panel:
	@cat slack_panel.js | pbcopy
