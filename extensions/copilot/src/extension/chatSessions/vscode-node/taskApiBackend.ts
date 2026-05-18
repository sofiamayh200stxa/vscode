/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as vscode from 'vscode';
import { GithubRepoId } from '../../../platform/git/common/gitService';
import { SessionInfo } from '../../../platform/github/common/githubAPI';
import {
	CloudAgentBackend,
	CloudDelegationResult,
	CloudSessionContent,
	CloudSessionData,
	CloudSessionIdentity,
	CreateCloudSessionParams,
	FollowUpResult,
} from '../vscode/cloudAgentBackend';

/**
 * Placeholder backend for the upcoming Mission Control Task API. Every API call
 * throws — real wiring lands in a follow-up PR once CAPI routing is available.
 * Selected via the `github.copilot.chat.cloudAgentBackend.version` setting set to `v2`.
 */
export class TaskApiBackend implements CloudAgentBackend {

	private notImplemented(): never {
		throw new Error(vscode.l10n.t('The Task API cloud agent backend is not yet available. Set `github.copilot.chat.cloudAgentBackend.version` to `v1` to use the Jobs API backend.'));
	}

	fetchSessionList(_repoIds: GithubRepoId[] | undefined, _isAgentWorkspace: boolean): Promise<CloudSessionData[]> {
		this.notImplemented();
	}

	fetchSessionContent(_repoOwner: string, _repoName: string, _sessions: SessionInfo[]): Promise<CloudSessionContent> {
		this.notImplemented();
	}

	createSession(_params: CreateCloudSessionParams, _stream: vscode.ChatResponseStream, _token: vscode.CancellationToken): Promise<CloudDelegationResult> {
		this.notImplemented();
	}

	sendFollowUp(_pullRequestOrTaskId: string, _prompt: string, _targetAgent?: string): Promise<FollowUpResult | undefined> {
		this.notImplemented();
	}

	getSessionInfo(_sessionId: string): Promise<SessionInfo | undefined> {
		this.notImplemented();
	}

	getSessionLogs(_sessionId: string): Promise<string> {
		this.notImplemented();
	}

	waitForSessionReady(_sessionId: string, _token?: vscode.CancellationToken): Promise<SessionInfo | undefined> {
		this.notImplemented();
	}

	parseSessionId(_resource: vscode.Uri): CloudSessionIdentity | undefined {
		return undefined;
	}
}
