/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import "RCTBundleURLProvider.h"
#import "RCTRootView.h"

#import "RCCManager.h"
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
 
  NSURL *jsCodeLocation;
  NSString *host = [[NSUserDefaults standardUserDefaults] stringForKey: @"host_preference"];
  NSString *port = [[NSUserDefaults standardUserDefaults] stringForKey: @"port_preference"];
  
  NSString * urlString = [NSString stringWithFormat: @"http://%@:%@/index.ios.bundle?platform=ios&dev=true", host, port];
  jsCodeLocation = [NSURL URLWithString: urlString];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  self.window.backgroundColor = [UIColor whiteColor];
  [[RCCManager sharedInstance] initBridgeWithBundleURL:jsCodeLocation];
  return YES;
}

@end
